TIMESTAMP=$1
VERSION=$2
BRANCH=$3
COMMIT_ID=$4
RELEASE_PREFIX=$5
echo "$TIMESTAMP $VERSION $BRANCH $COMMIT_ID $RELEASE_PREFIX"

curl_command="curl --silent --output release.json --write-out '%{http_code}' \
  --data '{
    \"tag_name\": \"$RELEASE_PREFIX-$TIMESTAMP\",
    \"target_commitish\": \"$BRANCH\",
    \"name\": \"$RELEASE_PREFIX-$TIMESTAMP\",
    \"body\": \"- Version: $VERSION\r\n- Commit ID: $COMMIT_ID\r\n- Released time: $TIMESTAMP\",
    \"draft\": false,
    \"prerelease\": false
  }' \
  --header \"Authorization: token $GITHUB_ACCESS_TOKEN\" \
  --header \"Content-Type: application/json\" \
  https://api.github.com/repos/moonlight8978/moonlight8978.github.io/releases"
http_code=$(eval $curl_command)

if [ $http_code = 201 ]; then
  exit 0
else
  cat release.json
  exit 1
fi
