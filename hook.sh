#!/bin/bash

# this script is not actually called, just stored here for ease of recovery 
# if repository is cloned on a new machine. place in .git/hooks/pre-push

S3_BUCKET=havron.xyz
TEMP_DEPLOY_DIR=/tmp/$S3_BUCKET/
# Ensure that the temporary directory is clean and unset potential conflicting
# environment variables
rm -rf $TEMP_DEPLOY_DIR
unset GIT_DIR
unset GIT_WORK_TREE

# Create a working tree with a bare repo that does not have submodules
mkdir -p $TEMP_DEPLOY_DIR
export GIT_DIR=$(pwd)
export GIT_WORK_TREE=$TEMP_DEPLOY_DIR
git checkout -f
cd $TEMP_DEPLOY_DIR

# If the repo has submodules, comment out or remove the above and uncomment the below:
#
# git clone $(pwd) $TEMP_DEPLOY_DIR
# cd $TEMP_DEPLOY_DIR
# git submodule update --init --recursive

# Sync with S3
echo -e "---------!!!!!!!!!! Attempting to sync with S3 bucket $S3_BUCKET !!!!!!!-----------"
s3cmd sync --delete-removed --acl-public --exclude '.git/*' ~/hogsmeade/public/ s3://$S3_BUCKET/
echo "Sync to $S3_BUCKET successful!"
# Clean up
cd ..
rm -rf $TEMP_DEPLOY_DIR
