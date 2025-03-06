import { first_skill } from "../data/first_skill";

export default function Skill() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {first_skill.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors"
            >
              <span className="text-4xl mb-4 inline-block">{skill.icon}</span>
              <h3 className="text-xl text-white mb-2">{skill.name}</h3>
              <p className="text-blue-400">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}