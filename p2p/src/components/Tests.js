import React, { Component } from 'react'

class Tests extends Component {
render()
{
console.log("Rendered");
return(
<div>

</div>
);
}
componentDidMount() {
console.log("did mount");
}
componentWillMount() {
console.log("will mount");
}
constructor() {
console.log("Constructed");
super();
}
}

export default Tests;