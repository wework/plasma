cd docs/gitbook

# install the plugins and build the static site
gitbook install && gitbook build

cd ../..

rm -rf ./docs/components
npm run styleguide:build

rm -rf ./docs/storybook
npm run build-storybook

# checkout to the gh-pages branch
git checkout gh-pages

# pull the latest updates
git pull origin gh-pages --rebase

# copy the static site files into the current directory.
cp -R ./docs/gitbook/_book/* .

rm -rf ./dev
mkdir ./dev

mkdir ./dev/components
mkdir ./dev/storybook

cp docs/CNAME .
cp -R ./docs/components/* ./dev/components
cp -R ./docs/storybook/* ./dev/storybook

# remove 'node_modules' and '_book' directory
git clean -fx node_modules
git clean -fx ./docs/gitbook/_book
git clean -fx ./docs/components
git clean -fx ./docs/storybook

# add all files
git add -A

# commit
git commit -m "Update docs"

# push to the origin
git push origin gh-pages

# checkout to the master branch
git checkout master