import http from "http";
import { __DIR__ } from "./constants/constants.js";
import fs from "fs";
import path from "path";
import { t } from "./utils/template.js";

const PORT: number = 3003;

const app = http.createServer(async (req, res) => {
  if (req.url === "/favicon.ico") {
    return;
  }

  // if(req.url === '/user'){
  //   let data = "";
  //   req.on("data", chunk => {
  //       data += chunk;
  //   });
  //   req.on("end", () => {
  //     console.log(data);
  //     res.end("Данные успешно получены");
  //   });

  //   return
  // }


  if (req.url === "/user") {
         
    const buffers = []; // буфер для получаемых данных

    for await (const chunk of req) {
      buffers.push(chunk);        // добавляем в буфер все полученные данные
    }

    const data = JSON.parse(Buffer.concat(buffers).toString());
    console.log(data);
    
    res.writeHead(200, { 
      "Content-Type": "application/json", 
      "content-encoding": "utf-8"
    });
    
    res.end(JSON.stringify({data, ok: true}));

    return
  }




  const filePath = path.normalize(
    path.join(
      __DIR__,
      "/pages",
      req.url === "/"
        ? "index.html"
        : req.url.includes("css")
        ? req.url
        : req.url + ".html"
    )
  );

  let contentType = "text/html";

  if (req.url.endsWith(".css")) {
    contentType = "text/css";
  } else if (req.url.endsWith(".js")) {
    contentType = "application/javascript";
  }

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.end("Not Found");

    return;
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    } else {
      const title = `Hello ${req.url}`;

      res.writeHead(200, { "Content-Type": contentType });


      const text = `${
      t(data, /{header}/, title)()
      .t(/{footer}/, "Footer").value}`;
      res.end(text);
    }
  });
});

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
