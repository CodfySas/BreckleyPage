import React, { useState } from 'react';
import { Calendar, User, ChevronRight, Filter, Search } from 'lucide-react';

interface NewsArticle {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
}

const newsData: NewsArticle[] = [
    {
        id: 1,
        title: "Nuevas Becas de Excelencia Académica 2024",
        excerpt: "Anunciamos la apertura de convocatoria para becas de excelencia académica destinadas a estudiantes destacados en diversas áreas del conocimiento.",
        author: "Dr. María González",
        date: "2024-01-15",
        category: "Becas",
        image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600",
        readTime: "3 min"
    },
    {
        id: 2,
        title: "Inauguración del Nuevo Laboratorio de Investigación",
        excerpt: "Nuestro campus estrena un laboratorio de última generación equipado con tecnología de vanguardia para impulsar la investigación científica.",
        author: "Prof. Carlos Mendoza",
        date: "2024-01-12",
        category: "Investigación",
        image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600",
        readTime: "4 min"
    },
    {
        id: 3,
        title: "Conferencia Internacional sobre Sostenibilidad",
        excerpt: "La institución será sede de la conferencia internacional más importante sobre sostenibilidad y cambio climático del año.",
        author: "Dra. Ana Ruiz",
        date: "2024-01-10",
        category: "Eventos",
        image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
        readTime: "5 min"
    },
    {
        id: 4,
        title: "Convenio con Universidad de Harvard",
        excerpt: "Firmamos un acuerdo de cooperación académica con Harvard University para programas de intercambio estudiantil y colaboración en investigación.",
        author: "Rector Dr. Juan Pérez",
        date: "2024-01-08",
        category: "Convenios",
        image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
        readTime: "6 min"
    },
    {
        id: 5,
        title: "Resultados del Ranking Nacional Universitario",
        excerpt: "Nuestra institución escala posiciones en el ranking nacional de universidades, destacando en áreas de investigación y calidad educativa.",
        author: "Oficina de Comunicaciones",
        date: "2024-01-05",
        category: "Reconocimientos",
        image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600",
        readTime: "4 min"
    },
    {
        id: 6,
        title: "Programa de Mentoría para Estudiantes",
        excerpt: "Lanzamos un innovador programa de mentoría que conecta a estudiantes con profesionales destacados de la industria.",
        author: "Dra. Laura Sánchez",
        date: "2024-01-03",
        category: "Programas",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
        readTime: "3 min"
    }
];

const categories = ["Todas", "Becas", "Investigación", "Eventos", "Convenios", "Reconocimientos", "Programas"];

const News: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Todas");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    const filteredNews = newsData.filter(article => {
        const matchesCategory = selectedCategory === "Todas" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredNews.length / articlesPerPage);
    const startIndex = (currentPage - 1) * articlesPerPage;
    const paginatedNews = filteredNews.slice(startIndex, startIndex + articlesPerPage);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getCategoryColor = (category: string) => {
        const colors = {
            "Becas": "bg-blue-100 text-blue-800",
            "Investigación": "bg-green-100 text-green-800",
            "Eventos": "bg-purple-100 text-purple-800",
            "Convenios": "bg-orange-100 text-orange-800",
            "Reconocimientos": "bg-yellow-100 text-yellow-800",
            "Programas": "bg-pink-100 text-pink-800"
        };
        return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2C3188] mb-6">
                        NOTICIAS Y ACTIVIDADES
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Mantente al día con las últimas noticias, eventos y logros de nuestra comunidad académica
                    </p>
                </div>
                <div className="w-24 h-1 bg-[#E31D28] mx-auto rounded-full"></div>

                {/* Search and Filter Bar */}
                <div className="mb-12 bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Buscar noticias..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3188] focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="text-gray-500 h-5 w-5" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setCurrentPage(1);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                            ? 'bg-[#2C3188] text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {paginatedNews.map((article) => (
                        <article
                            key={article.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(article.category)}`}>
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2C3188] transition-colors duration-200">
                                    {article.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <User className="h-4 w-4" />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{formatDate(article.date)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <button className="flex items-center gap-2 text-[#2C3188] hover:text-[#373eb6] font-medium transition-colors duration-200">
                                        Leer más
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Anterior
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${currentPage === index + 1
                                        ? 'bg-[#2C3188] text-white'
                                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Siguiente
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default News;