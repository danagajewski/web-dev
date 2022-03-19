
const exam = () => {
  const ewq = [28,107,26,65,95]
  return(`

<ul>
${
    ewq.map(rew =>{
        return <li>{rew}</li>
  })
}
</ul>
    `);
}
export default exam;