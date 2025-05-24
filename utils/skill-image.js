
import cplusplus from '../app/assets/svg/skills/cplusplus.svg';
import css from '../app/assets/svg/skills/css.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import flutter from '../app/assets/svg/skills/flutter.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import nodejs from '../app/assets/svg/skills/nodejs.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'python':
      return python;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'tensorflow':
      return tensorflow;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'nodejs':
      return nodejs;
    default:
      break;
  }
}

