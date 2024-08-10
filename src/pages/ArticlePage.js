// localhost:3000/articles/learn-node
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const { articleId } = useParams();
  //   console.log(art)
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }
  
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </>
  );
};

export default ArticlePage;
