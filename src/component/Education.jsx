import { useState } from "react";
import { Plus, X, Trash2 } from "lucide-react";
import { Button } from "./snipit/Button";
import { Input } from "./snipit/Input";
import { Textarea } from "./snipit/Textarea";

export default function Education() {
  const [educationList, setEducationList] = useState([
    {
      id: "1",
      institution: "AltSchool Africa",
      duration: "2023 - Present",
      description:
        "Studying Software Engineering with focus on Frontend and Backend Development. Learning modern web technologies and best practices.",
    },
    {
      id: "2",
      institution: "University of Lagos",
      duration: "2018 - 2022",
      description:
        "Bachelor of Science in Computer Science. Graduated with honors, specialized in web development and software engineering.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    institution: "",
    duration: "",
    description: "",
  });

  const handleDelete = (id) => {
    setEducationList(educationList.filter((entry) => entry.id !== id));
  };

  const handleSave = () => {
    if (formData.institution && formData.duration && formData.description) {
      const newEntry = {
        id: Date.now().toString(),
        ...formData,
      };
      setEducationList([newEntry, ...educationList]);
      setFormData({ institution: "", duration: "", description: "" });
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setFormData({ institution: "", duration: "", description: "" });
    setIsModalOpen(false);
  };

  return (
    <section
      id="education"
      className="min-h-screen bg-[#0a0a23] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 sm:mb-16">
          Education
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-[#ff004d]"></div>

          {/* Education Entries */}
          <div className="space-y-8 sm:space-y-12">
            {educationList.map((entry, index) => (
              <div
                key={entry.id}
                className="relative pl-12 sm:pl-16 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-4 top-2 w-4 h-4 bg-[#ff004d] rounded-full border-4 border-[#0a0a23]"></div>

                {/* Card */}
                <div className="border-2 border-[#ff004d] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff004d]/20 relative group">
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#ff004d] transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Delete education entry"
                  >
                    <Trash2 size={20} />
                  </button>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 pr-8">
                    {entry.institution}
                  </h3>
                  <p className="text-[#ff004d] text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    {entry.duration}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add Education Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#ff004d] hover:bg-[#cc0039] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Add Education
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn">
          <div className="bg-[#0a0a23] border-2 border-[#ff004d] rounded-2xl p-6 sm:p-8 w-full max-w-md relative">
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-white hover:text-[#ff004d] transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Add Education
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  School / Institution Name
                </label>
                <Input
                  value={formData.institution}
                  onChange={(e) =>
                    setFormData({ ...formData, institution: e.target.value })
                  }
                  placeholder="e.g., Harvard University"
                  className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Year / Duration
                </label>
                <Input
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                  placeholder="e.g., 2020 - 2024"
                  className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Description
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe your education experience..."
                  rows={4}
                  className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500 resize-none"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button
                onClick={handleSave}
                className="flex-1 bg-[#ff004d] hover:bg-[#cc0039] text-white py-3 rounded-full font-medium transition-all duration-300"
              >
                Save
              </Button>
              <Button
                onClick={handleCancel}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-full font-medium transition-all duration-300"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
