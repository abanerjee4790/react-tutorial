import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}


function RenderComments({ comments }) {

    const comment = comments.map((com) => {
        return (
            <li key={com.id}>{com.comment}
                <br /><br />
                    --{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}
                <br /><br />
            </li>
        );
    });

    return (
        <ul class="list-unstyled">
            {comment}
        </ul>
    )
}

const DishDetail = (props) => {
    if (props.selectedDish != null)
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={props.selectedDish.comments} />
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}



export default DishDetail;