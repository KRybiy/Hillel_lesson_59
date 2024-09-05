
// articles routes

const getArticlesHandler = (req, res) => {
  res.send("Get articles route");
};

const postArticlesHandler = (req, res) => {
  res.send("Post articles route");
};

// articles/:articleId routes

const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params;
  res.send(`Get article by id: ${articleId}`);
};

const deleteArticleByIdHandler = (req, res) => {
  const { articleId } = req.params;
  res.send(`Delete article by id: ${articleId}`);
};

const putArticleByIdHandler = (req, res) => {
  const { articleId } = req.params;
  res.send(`Put article by id: ${articleId}`);
};

export {
  getArticlesHandler,
  postArticlesHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
  putArticleByIdHandler,
};