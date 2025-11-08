import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

export default function ProjectForm({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    liveDemo: "",
    githubLink: "",
    image: "",
  });

  const handleSave = () => {
    if (formData.title && formData.description) {
      const newProject = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        technologies: formData.technologies
          .split(",")
          .map((tech) => tech.trim()),
        liveDemo: formData.liveDemo || "#",
        githubLink: formData.githubLink || "#",
        image: formData.image || "/pro.jpg",
      };
      onSave(newProject);
      setFormData({
        title: "",
        description: "",
        technologies: "",
        liveDemo: "",
        githubLink: "",
        image: "",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      technologies: "",
      liveDemo: "",
      githubLink: "",
      image: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn">
      <div
        id="proForm"
        className="bg-[#0a0a23] border-2 border-[#ff004d] rounded-2xl p-6 sm:p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-white hover:text-[#ff004d] transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Add New Project
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Project Title
            </label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="e.g., Enter Project Title"
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
              placeholder="Describe your project..."
              rows={4}
              className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Technologies (comma separated)
            </label>
            <Input
              value={formData.technologies}
              onChange={(e) =>
                setFormData({ ...formData, technologies: e.target.value })
              }
              placeholder="e.g., React, TypeScript, TailwindCSS"
              className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Live Demo URL
            </label>
            <Input
              value={formData.liveDemo}
              onChange={(e) =>
                setFormData({ ...formData, liveDemo: e.target.value })
              }
              placeholder="https://..."
              className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              GitHub Link
            </label>
            <Input
              value={formData.githubLink}
              onChange={(e) =>
                setFormData({ ...formData, githubLink: e.target.value })
              }
              placeholder="https://github.com/..."
              className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Image URL (optional)
            </label>
            <Input
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              placeholder="/pro.jpg"
              className="bg-[#0a0a23] border-[#ff004d] text-white placeholder:text-gray-500"
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
  );
}
