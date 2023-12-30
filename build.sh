#/usr/bin/env zsh
mvn clean package -Dmaven.test.skip -e
mkdir -p build
cd build
mkdir -p novel-crawl
mkdir -p novel-front
mkdir -p novel-admin

cp ../novel-crawl/target/build/novel-crawl.zip novel-crawl
cp ../novel-front/target/build/novel-front.zip novel-front
cp ../novel-admin/target/build/novel-admin.zip novel-admin
cd novel-crawl
unzip -o novel-crawl.zip
cd ../novel-front
unzip -o novel-front.zip
cd ../novel-admin
unzip -o novel-admin.zip