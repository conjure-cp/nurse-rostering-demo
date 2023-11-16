interface BannerConfig {
    logo          : string;
    title         : string;
    author        : string;
    author_github : string;
    description   : string;
    repo_url      : string;
    github        : string;
    license       : string;
  }
  
const bannerConfig: BannerConfig = {
    logo          : 'conjure-cp-logo.png',
    title         : "Nurse Rostering",
    author        : "Aldiyar Ablyazov",
    author_github : "https://github.com/Aldiyazov",
    description   : "This project is created as a dissertation project at the University of St Andrews to simplify and optimise nurse scheduling in healthcare facilities.",
    repo_url      : 'conjure-cp/task-allocation-demo',
    github        : "https://github.com/conjure-cp/nurse-rostering-demo",
    license       : 'Mozilla Public License 2.0'
};
  
export default bannerConfig;