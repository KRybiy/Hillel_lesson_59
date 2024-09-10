// Mock data for articles 
const articles = [
  { id: 1, title: "Article One", content: "Content of article one." },
  { id: 2, title: "Article Two", content: "Content of article two." },
  { id: 3, title: "Article Three", content: "Content of article three." },
];

const getArticlesHandler = (req, res) => {
  res.render("articles/index.ejs", { articles });
};

const postArticlesHandler = (req, res) => {
  res.send("Post articles route");
};

const getArticleByIdHandler = (req, res) => {
  const { articleId } = req.params;
  const article = articles.find((a) => a.id === parseInt(articleId, 10));

  if (!article) {
    return res.status(404).send("Article not found");
  }

  res.render("articles/detail.ejs", { article });
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
