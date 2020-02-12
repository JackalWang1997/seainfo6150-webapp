import React from "react";
import PropTypes from 'prop-types';
<<<<<<< Updated upstream
import Button from './ArticleListItem';

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
          <li key={article.slug}>
              <h3>{article.title}</h3>
              <p>
                {article.shortText}
              </p>
              <time dateTime>
                  {article.pubDate}
                  <Button info={article} />
              </time>
          </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
=======
import Item from './ArticleListItem';
import styles from './ArticleList.module.css'

const ArticleList = props => {
    return (
        <ul className={styles.body}>
            {props.articles.map(article => (
                <li key={article.slug}>
                    <Item article={article}></Item>
                </li>
            ))}
        </ul>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
>>>>>>> Stashed changes
};
export default ArticleList;
