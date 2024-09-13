import { Router } from "express";

import rootRouter from "./root.mjs";
import usersRouter from "./users.mjs";
import articlesRouter from "./articles.mjs";

const router = Router();


// Route to set the theme
router.post('/set-theme', (req, res) => {
  const theme = req.body.theme;
  if (theme) {
    res.cookie('theme', theme, { maxAge: 900000, httpOnly: true });
  }
  res.redirect('/');
});

// Route to render the home page
router.get('/', (req, res) => {
  const theme = req.cookies.theme || 'light'; // Default to 'light' if no theme is set
  res.render('index.pug', { theme });
});


router.use("/", rootRouter)
router.use("/users", usersRouter);
router.use("/articles", articlesRouter);

export default router;