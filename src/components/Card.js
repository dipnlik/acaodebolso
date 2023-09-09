const Card = ({ contents }) => {
  const { id, gid, ...entries } = contents;

  return (
    <table className="table table-striped">
      <tbody>
        {[1, 2].includes(gid) && ["P", "O", "A", "D", "L", "M"].map((category, index) => {
          return (
            <tr key={index}>
              <td className="category">{category}</td>
              <td className="text">{contents[`${category}`]}</td>
              <td className="score">{contents[`v${category}`]}</td>
            </tr>
          )
        })}
        {["NL"].includes(gid) && Object.entries(entries).map(([key, value], index) => {
          return (
            <tr key={index}>
              <td className="category">{key}</td>
              <td className="text">{value}</td>
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <td className="card-info" colSpan="3">#{id}-{gid}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Card;
