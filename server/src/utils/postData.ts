import http from "http";
/**
 * Reads all data from the given IncomingMessage and returns it as a JSON object.
 * @param req The IncomingMessage to read from.
 * @returns A Promise that resolves to the JSON object read from the request.
 */
export const postData = async (req: http.IncomingMessage) => {
  const buffers = []; // буфер для получаемых данных

  for await (const chunk of req) {
    buffers.push(chunk); // добавляем в буфер все полученные данные
  }

  return JSON.parse(Buffer.concat(buffers).toString());
};
