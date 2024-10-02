import NavBar from '../components/navbar';
import './about.css';

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="aboutContainer">
        <div>
          <h1 className='aboutTitleCenter'>Our Story</h1>
          <p>
            Etiam luctus ut neque vitae pellentesque. Phasellus quis diam sit amet ante vestibulum interdum. Quisque at mi a mauris suscipit feugiat. Phasellus ac eleifend sem. Ut tincidunt suscipit ipsum et pellentesque. Curabitur at gravida lacus. Proin ac magna diam. Maecenas justo ipsum, eleifend at euismod facilisis, auctor non tortor. Donec sagittis rhoncus justo nec ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam orci massa, mattis eu vulputate mollis, ultricies vitae purus. Curabitur interdum pulvinar neque vitae efficitur. Curabitur eget turpis porttitor arcu mattis scelerisque. Praesent justo tortor, lobortis quis ornare vitae, elementum a nulla. Vestibulum ac tellus magna.
          </p>
        </div>
        <div>
          <h1 className='aboutTitleCenter'>Our Vision</h1>
          <p>
            Morbi ut nisi in purus iaculis vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vel dictum massa, ac viverra ipsum. Nulla finibus, erat et sodales interdum, felis justo finibus dolor, ac consectetur leo tellus ut dui. Suspendisse finibus vulputate commodo. Fusce id imperdiet felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor tincidunt consectetur.
          </p>
        </div>
        <div className="teamContainer">
          <h1 className='aboutTitleCenter'>Our Team</h1>
          <div className="teamMemberContainer">
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

const TeamMember = () => {
  return (
    <div className="teamMember">
      <img width="150px"
        src='https://static.vecteezy.com/system/resources/previews/020/537/695/non_2x/black-business-man-standing-in-dark-suit-with-hands-in-his-pockets-isolated-drawing-flat-design-icon-vector.jpg' />
      <div>FirstName LastName</div>
      <div>Position Title</div>
    </div>
  )
}
