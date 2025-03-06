import Image from "next/image";
import { prj } from "../data/prj";

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Selected Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {prj.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white mb-4">{project.title}</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Situation:</strong> {project.situation}</p>
                  <p><strong>Task:</strong> {project.task}</p>
                  <p><strong>Result:</strong> {project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}