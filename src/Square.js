import React from 'react';


// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }

//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={this.props.onClick}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }


// 由于我们不会用到Square的state，所以我们将其改造成function component
function Square(props){
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}
export default Square;