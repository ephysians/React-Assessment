import React from 'react';
import UserInfo from './UserInfo/UserInfo';
class App extends React.Component {
    state = {
        person: [
            { firstName: "Emmmanuel", lastName: "Chuks", email: "prabit@gmail.com", phoneNo: "07087883853" },
            { firstName: "Mark", lastName: "Fish", email: "shant@gmail.com", phoneNo: "07087883853" },
            { firstName: "Jude", lastName: "Ella", email: "hteh@gmail.com", phoneNo: "07087883853" },
            { firstName: "Maths", lastName: "English", email: "monalist@gmail.com", phoneNo: "07087883853" },
            { firstName: "Mary", lastName: "Seyi", email: "ronket@gmail.com", phoneNo: "07087883853" },
        ],
    };
//     


render() {
  return (
      <>
          <UserInfo firstName="Emmanuel" lastName="Obinna" email="chuks@gmail.com" phoneNo="09038104041" />
          <UserInfo firstName={this.state.person[1].firstName} lastName={this.state.person[0].lastName} email={this.state.person[0].email} phoneNo={this.state.person[0].phoneNo} />
          <UserInfo firstName={this.state.person[2].firstName} lastName={this.state.person[0].lastName} email={this.state.person[0].email} phoneNo={this.state.person[0].phoneNo} />
          <UserInfo firstName={this.state.person[3].firstName} lastName={this.state.person[0].lastName} email={this.state.person[0].email} phoneNo={this.state.person[0].phoneNo} />
          <UserInfo firstName={this.state.person[4].firstName} lastName={this.state.person[0].lastName} email={this.state.person[0].email} phoneNo={this.state.person[0].phoneNo} />
      </>
  )
}
}
export default App;