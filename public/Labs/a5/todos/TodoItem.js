const TodoItem = (todo) => {
  const ewq = [28,107,26,65,95]
  return (`
<ul>
${
      ewq.filter(
          function(dsa){
            return dsa < 50
          })
      .map(
          function(rew) {
            return(
                <li>{rew}</li>
            )
          })
  }
</ul>

    `);
}
export default TodoItem;
