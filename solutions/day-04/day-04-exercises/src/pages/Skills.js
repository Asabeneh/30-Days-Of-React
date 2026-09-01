import React from "react";
import styles from "./Skills.module.css";
import Tags from "./Tags";

const Skills = (props) => {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div>
        <Tags skill="HTML" />
        <Tags skill="CSS" />
        <Tags skill="Sass" />
        <Tags skill="JS" />
        <Tags skill="React" />
        <Tags skill="Redux" />
        <Tags skill="Node" />
        <Tags skill="MongoDB" />
        <Tags skill="Python" />
        <Tags skill="Flask" />
        <Tags skill="Django" />
        <Tags skill="Data Analisys" />
        <Tags skill="MySQL" />
        <Tags skill="GraphQL" />
        <Tags skill="Gatsby" />
        <Tags skill="Docker" />
        <Tags skill="Heroku" />
        <Tags skill="Git" />
      </div>
    </div>
  );
};

export default Skills;
