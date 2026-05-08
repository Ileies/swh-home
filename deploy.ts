import { $ } from 'bun';

const SSH_HOST = 'root@offlimits-it.biz';
const REMOTE_DIR = '/var/www/vhosts/smartworkhub.de/httpdocs';

try {
	console.log('Compressing build directory...');
	await $`tar -czf ./build.tar.gz -C ./build .`;

	console.log('Uploading compressed build...');
	await $`scp ./build.tar.gz ${SSH_HOST}:/tmp/build.tar.gz`;

	console.log('Cleaning remote directory...');
	await $`ssh ${SSH_HOST} "rm -rf ${REMOTE_DIR}/* && rm -rf ${REMOTE_DIR}/.[!.]*"`;

	console.log('Extracting build on server...');
	await $`ssh ${SSH_HOST} "tar -xzf /tmp/build.tar.gz -C ${REMOTE_DIR}"`;

	console.log('Cleaning up temporary files...');
	await $`ssh ${SSH_HOST} "rm /tmp/build.tar.gz"`;
	await $`rm ./build.tar.gz`;

	console.log('Deployment completed successfully!');
} catch (error) {
	console.error('Deployment failed:', error instanceof Error ? error.message : String(error));
	process.exit(1);
}
