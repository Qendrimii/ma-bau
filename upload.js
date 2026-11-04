import 'dotenv/config'
import SftpClient from 'ssh2-sftp-client'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const required = ['SFTP_HOST', 'SFTP_USERNAME', 'SFTP_PASSWORD']
const missing = required.filter((k) => !process.env[k])
if (missing.length) {
  console.error(`Missing required env vars: ${missing.join(', ')}\nCopy .env.example to .env and fill in the values.`)
  process.exit(1)
}

const config = {
  host: process.env.SFTP_HOST,
  port: Number(process.env.SFTP_PORT) || 22,
  username: process.env.SFTP_USERNAME,
  password: process.env.SFTP_PASSWORD,
  tryKeyboard: true,
  algorithms: {
    kex: [
      'ecdh-sha2-nistp256',
      'ecdh-sha2-nistp384',
      'ecdh-sha2-nistp521',
      'diffie-hellman-group-exchange-sha256',
      'diffie-hellman-group14-sha256',
      'diffie-hellman-group14-sha1'
    ]
  }
}

const localDir = path.join(__dirname, 'dist')
const remoteDir = process.env.SFTP_REMOTE_DIR || '/web'

async function uploadDirectory(sftp, localPath, remotePath) {
  const items = fs.readdirSync(localPath)

  for (const item of items) {
    const localItemPath = path.join(localPath, item)
    const remoteItemPath = remotePath + '/' + item
    const stat = fs.statSync(localItemPath)

    if (stat.isDirectory()) {
      console.log(`Creating directory: ${remoteItemPath}`)
      try {
        await sftp.mkdir(remoteItemPath, true)
      } catch {
        // Directory might already exist
      }
      await uploadDirectory(sftp, localItemPath, remoteItemPath)
    } else {
      console.log(`Uploading: ${item} -> ${remoteItemPath}`)
      await sftp.put(localItemPath, remoteItemPath)
    }
  }
}

async function main() {
  const sftp = new SftpClient()

  try {
    console.log('Connecting to IONOS server...')
    await sftp.connect(config)
    console.log('Connected successfully!')

    console.log('\nUploading files from dist folder...')
    await uploadDirectory(sftp, localDir, remoteDir)

    console.log('\n✓ Upload complete!')
    console.log('Your site should now be live on your IONOS domain.')
  } catch (err) {
    console.error('Upload failed:', err.message)
    process.exit(1)
  } finally {
    await sftp.end()
  }
}

main()
