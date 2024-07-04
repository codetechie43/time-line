import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #0d0d0d;
  color: #fff;
  position: relative;
`;

const DottedLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: repeating-linear-gradient(
    #8f00ff 0,
    #8f00ff 4px,
    transparent 4px,
    transparent 8px
  );
  z-index: -1;
`;

const ProgressBar = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  background: #ffffff; /* Change to white */
  z-index: -1;
`;

const EventContainer = styled(motion.div)`
  background: #1d1d1d;
  border: 2px solid #8f00ff;
  border-radius: 10px;
  margin: 20px 0;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 0 20px #8f00ff;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const EventTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #e0e0e0;
`;

const EventDescription = styled.p`
  margin: 10px 0 0;
  color: #b0b0b0;
`;

const EventDate = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 0.9em;
  color: #a0a0a0;
`;

const EventDetails = styled(motion.div)`
  margin-top: 10px;
  padding: 10px;
  background: #2d2d2d;
  border-radius: 5px;
`;

const EventImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
`;

const Timeline = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      height: `${Math.min(scrollY, document.documentElement.scrollHeight - window.innerHeight)}px`,
      transition: { duration: 0.3, ease: 'easeOut' },
    });
  }, [scrollY, controls]);

  return (
    <TimelineContainer>
      <DottedLine />
      <ProgressBar initial={{ height: 0 }} animate={controls} />
      {events.map((event, index) => (
        <EventContainer
          key={index}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
        >
          <EventTitle>{event.title}</EventTitle>
          <EventDescription>{event.description}</EventDescription>
          <EventDate>{event.date}</EventDate>
          {expandedEvent === index && (
            <EventDetails
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>More details about {event.title}...</p>
              <EventImage src={event.image} alt={event.title} loading="lazy" />
            </EventDetails>
          )}
        </EventContainer>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;
