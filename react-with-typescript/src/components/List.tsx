import {IState  as IProps} from '../App'

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="lol"></img>
            <h2> {person.name} </h2>
          </div>
          <p> {person.age} years old.</p>
          <p> {person.notes}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
