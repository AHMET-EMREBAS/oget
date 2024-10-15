#!/usr/bin/env sh


npx nx g @nx/js:lib libs/core --importPath=@oget/core
npx nx g @nx/js:lib libs/common --importPath=@oget/common
npx nx g @nx/js:lib libs/check --importPath=@oget/check
npx nx g @nx/js:lib libs/db --importPath=@oget/db

npx nx g @nx/js:lib libs/type --importPath=@oget/type
npx nx g @nx/js:lib libs/const --importPath=@oget/const

npx nx g @nx/js:lib libs/module --importPath=@oget/module
npx nx g @nx/js:lib libs/model --importPath=@oget/model
npx nx g @nx/js:lib libs/entity --importPath=@oget/entity









