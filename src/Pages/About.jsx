import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { MdWork } from "react-icons/md";
import '../Styles/About.css';

function About() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
           Banaras Hindu University, Varanasi, Uttar Pradesh
          </h3>
          <p> BA Hons. Geography</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
           Institute of Management Studies, Ranchi University, Jharkhand
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            MBA
          </h4>

          <p> Marketing & HR</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov-2024 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={< MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer Intern- Unified Mentor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote, India
          </h4>
          <p>Developed a fully functional Portfolio Website and a Music Player website</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2024 - Nov 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={< MdWorkHistory />}
        >
          <h3 className="vertical-timeline-element-title">
           React Intern- Alphawizz Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Indore, Madhya Pradesh
          </h4>
          <p>
            Designed and developed E-commerce website, login pages and chat Interfaces.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2021 - Feb 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={< MdWorkHistory />}
        >
          <h3 className="vertical-timeline-element-title">
           Business Development Executive- Extramarks Education
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Ranchi, Jharkhand
          </h4>
          <p>
           Utilized React.js to enhance the official website. Produced Sales documents, finalized deals and mainatined records.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;