import Box from "../../ui/Box";
import ExternalLink from "../../ui/ExternalLink";
function Experince() {
  return (
    <div className="flex flex-col gap-7 py-10">
      <Box
        date="2024 November - Present"
        jobTitle="Code Expert | Outlier AI"
        desc="Specialized in JavaScript to review, debug, and optimize
              coding tasks, enhancing AI model capabilities. Provided
              detailed feedback on JavaScript-based solutions to improve
              accuracy and performance. Ensured best practices in
              JavaScript development, contributing to high-quality AI
              model training."
        skills={[
          "JavaScript",
          "Code enhancement",
          "Prblem solving",
          "Bug Fixing",
        ]}
      />
      <Box
        date="2024 April - October"
        jobTitle=" Frontend Developer | DEPI - Digital Egypt Pioneers
                    Initiative"
        desc="During my frontend development internship, I gained hands-on
              experience in designing and developing interactive and
              responsive websites. I worked on various projects, where I
              implemented HTML, CSS, and JavaScript to create
              pixel-perfect, user-friendly web pages. The internship
              allowed me to collaborate with a team of developers, learn
              best practices in version control using Git and GitHub, and
              enhance my skills in debugging and optimizing code for
              better performance. This experience strengthened my
              foundation in frontend development and prepared me for more
              advanced challenges in the field."
        skills={["HTML", "CSS", "JavaScript", "Bootstrap", "UX/UI", "Angular"]}
      />
      <Box
        date="2023 June - October"
        jobTitle="Labeller - MEEG"
        desc="Collaborated with team members, enhancing communication and
              teamwork skills. Managed tasks and technical issues with
              strong computer proficiency, improving operational
              efficiency. Thrived in a fast-paced environment, balancing
              deadlines and maintaining attention to detail."
      />
      <ExternalLink href="img/Yasmien_Tareq.pdf">Veiw Full Resume</ExternalLink>
    </div>
  );
}

export default Experince;
