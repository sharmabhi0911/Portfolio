import s from './GithubActivity.module.scss';

const GithubActivity = () => {

  return (
    <div className={s.container}>
      <img
        src='/leetcode.png'
        alt="LeetCode Activity"
        className={s.leetImage}
      />
    </div>
  );
};

export default GithubActivity;
