import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {
    
    renderComments(comments) {
        
        const comment = comments.map((com) => {
            let dt = new Date(com.date);

            let day = dt.toLocaleString('default', { day: '2-digit' });
            let month = dt.toLocaleString('default', { month: 'short' });
            let year = dt.getFullYear();
            
            return (
                <li key={com.id}>{com.comment}<br/><br/>-- {com.author}, {month} {day}, {year}<br/><br/></li>
            );
        });

        return (
            <ul class="list-unstyled">
                {comment}
            </ul>    
        )
    }

    render() {
        if (this.props.selectedDish != null)
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                            {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
}

export default DishDetail;