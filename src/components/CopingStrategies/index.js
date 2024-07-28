import React from "react";
import "./CopingStrategies.css";
import { Container, Typography, Box } from "@mui/material";

const CopingStrategies = () => {
    return (
      <Container className="coping-strategies">
        <Typography variant="h4" align="center" fontWeight="bold">
          Boost Your Mental Health
        </Typography>
        <Box className="coping-strategies-section">
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
            1. Make social connection — especially face-to-face — a priority
          </Typography>
          <Typography variant="body1">
          Phone calls and social networks have their place, but few things can beat the stress-busting, mood-boosting power of quality face-to-face time with other people, especially those you love and people who energize you.
          </Typography>
          <Typography variant="body1">There are lots of things you could try to help build stronger and closer relationships:</Typography>
          <ul>
            <li>Try switching off the TV to talk or play a game with your children, friends or family</li>
            <li>Arrange a day out with friends you have not seen for a while</li>
            <li>Visit a friend or family member who needs support or company</li>
            <li>Volunteer at a local school, hospital or community group.</li>
          </ul>
        </Box>
        <div className="coping-strategies-section">
          <Typography variant="h5" fontWeight="bold">
            2. Stay active
          </Typography>
          <Typography variant="body1">
          Staying active is as good for the brain as it is for the body. Regular exercise or activity can have a major impact on your mental and emotional health, relieve stress, improve memory, and help you sleep better.
          </Typography>
          <Typography variant="body1">Some ways to remain active include:</Typography>
          <ul>
            <li>Read about strength and flexibility exercises to increase muscle strength and improve balance</li>
            <li>Set an alarm on your phone to remind you to move every hour</li>
            <li>Move at your own pace. There are lots of ways to be active- and you do not need to be an athlete</li>
            <li>USe Wellness Compass Physical Platform to maintain your strength and gain confidence</li>
          </ul>
        </div>
        <div className="coping-strategies-section">
          <Typography variant="h5" fontWeight="bold">
            3. Appeal to your senses
          </Typography>
          <Typography variant="body1">
          Does listening to an uplifting song make you feel calm? Does squeezing a stress ball help you feel centred? What about taking a walk in nature and enjoying the sights and sounds of the trees? Everyone responds to sensory input a little differently, so experiment with healthy sensory inputs, rather than unhealthy sensory inputs, to find what works best for you.
          </Typography>
          <ul>
            <li>Try learning to cook something new</li>
            <li>Try taking on a new responsibility at work, such as mentoring a junior staff member or improving your presentation skills</li>
            <li>Try new hobbies that challenge you, such as writing a blog, taking up a new sport or learning to paint</li>
            <li>Work on a DIY project, such as fixing a broken bike, garden gate or something bigger.</li>
          </ul>
        </div>
        <div className="coping-strategies-section">
          <Typography variant="h5" fontWeight="bold">
            4. Eat a brain-healthy diet to support strong mental health
          </Typography>
          <Typography variant="body1">
          Foods that may support your mood include beans, legumes (e.g., lentils), fatty fish rich in omega-3s, nuts (e.g., walnuts, almonds, cashews and peanuts), avocados, dark leafy greens (e.g., spinach, kale and Brussels sprouts), and fruit (e.g., blueberries). Dark chocolate has also been found to be potentially beneficial for mental health. For the best dietary and nutritional advice, talk to a registered dietician.
          </Typography>
          <Typography variant="body1">Some ways to improve your sleep include:</Typography>
          <ul>
            <li>Cut down on saturated fat and sugar</li>
            <li>Try at least one new recipe per week</li>
            <li>Bake or roast instead of grilling or frying</li>
            <li>Increase your protein intake</li>
          </ul>
        </div>
        <div className="coping-strategies-section">
          <Typography variant="h5" fontWeight="bold">
            5. Find purpose and meaning
          </Typography>
          <Typography variant="body1">
          This is different for everyone, but finding purpose in your day is a big factor to good mental health. You might try one of the following:
          </Typography>
          <ul>
            <li>Engage in work and play that makes you feel useful</li>
            <li>Invest in relationships and spend quality time with people who matter to you</li>
            <li>Find ways to care for others, which can be as rewarding and meaningful as it is challenging</li>
            <li>Think of one good deed or gesture to do each day</li>
          </ul>
        </div>

      </Container>
    );
};

export default CopingStrategies;
