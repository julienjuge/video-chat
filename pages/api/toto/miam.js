export default (req, res) => {
  if (req.method === "POST") {
    res.send("post");
  } else if (req.method === "GET") {
    res.send("get");
  }
};
