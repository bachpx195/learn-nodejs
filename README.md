# learn-nodejs

# Http
Moi request co 1 Head gom content-Type vaf Trailer de mapping voi api xac thuc request
VD: response.addTrailers({'Content-MD5': '57af5706b6fbf6ba15f4a222993588a5'});

# Babel
Babel la mot compliler (bien dich chuoi string thanh ngon ngu may) cua nodejs

code: npm install --save-dev babel-cli
--save-dev luu thu vien trong qua tring dev ko lu trong moi truong production

code: npm install --save-dev babel-preset-es2015 babel-preset-stage-2
+ babel-preset-es2015@6.24.1
+ babel-preset-stage-2@6.24.1
Ho tro code es6

- Nodemon
code: npm install --save-dev babel-cli
Node monitor(theo doi) theo doi su thay doi cua code.
Code duoc cap nhat lien tuc.

npm run build
npm run serve
npm start

# Files
require('fs') - file systems quan ly ghi file doc file

+ callback -> goi ham trong ham
vd:
  fs.writeFile(fileName, jsonString, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(`Saved to the ${fileName}`);
  })
+ Asynchronously (doc khong dong bo): tach ra thanh mot tien trinh rieng
