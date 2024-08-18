import React, { Component, ReactNode } from "react";

//props
interface Props{
    children:ReactNode;
}

//state
interface ErrorInformation{
    hasError:boolean;
}

class ErrorBoundary extends Component<Props, ErrorInformation>{

    constructor(props:Props){
        super(props);
        this.state={
            hasError:false
        }
    }

    //function will be triggered/called whenever it catches an error
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Some Error happende");
        this.setState({
            hasError:true
        })
    }

    render(){
        if(this.state.hasError){
            return <h1>There is an error</h1>
        }
        else{
            //display the child component
            return this.props.children;
        }
    }
}

export default ErrorBoundary;