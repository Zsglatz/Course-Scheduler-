import React, { Component } from 'react';
import { connect } from 'react-redux';

class CourseLibrary extends Component {

    constructor(props) {
        super(props)

        this.renderCourse = this.renderCourse.bind(this)
    }

    renderCourse(course) {
        return (
        <li key={course.title} className='course'> 
            <div className='courseInfo'>
                <div className='courseTitle'>
                    {course.title}
                </div>
            </div>
            <div className='courseDescription'>
                <h6 className='courseDescriptionTitle'> Course Description </h6>
                <p>{course.description} </p>
            </div>
        </li>
        )
    }

    render() {
      return ( 

        <ul> 
            {this.props.course.map(this.renderCourse)}
        </ul> 

      )}
}

function mapStateToProps(state) {
    console.log(`state: ${JSON.stringify(state.courses)}`)
    return { course: state.courses }
}

export default connect(mapStateToProps)(CourseLibrary)