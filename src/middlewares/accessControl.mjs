export function checkArticleAccess(req, res, next) {
 
  const hasAccess = true; 
  if (!hasAccess) {
      return res.status(403).send('Access denied to this article.');
  }
  next();
}
