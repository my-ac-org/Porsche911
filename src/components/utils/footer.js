import Image from "next/image";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-[#0E0E12] text-white p-16 pb-8 !z-50">
            {/* Secciones Principales */}
            <div className="flex flex-col gap-14">
                <div className="flex items-start justify-start gap-20 p-12">
                    {/* Contacto */}
                    <div>
                        <h4 className="font-bold text-lg mb-3">Contacto</h4>
                        <p className="mb-8 text-base">¿Preguntas?</p>
                        <button className="bg-white text-black p-6 py-4 rounded hover:bg-gray-200 text-base">
                            Formulario de Contacto
                        </button>
                    </div>

                    {/* Redes Sociales */}
                    <div>
                        <h4 className="font-bold text-lg mb-3">Redes Sociales</h4>
                        <p className="mb-4 text-base">
                            Ponte en contacto con nosotros a través de <br />
                            las redes sociales.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white p-2 rounded text-base">
                                <FaFacebook className="text-black text-3xl fill-black" />
                            </a>
                            <a href="#" className="bg-white p-2 rounded text-base">
                                <FaInstagram className="text-black text-3xl fill-black" />
                            </a>
                            <a href="#" className="bg-white p-2 rounded text-base">
                                <FaPinterest className="text-black text-3xl fill-black" />
                            </a>
                            <a href="#" className="bg-white p-2 rounded text-base">
                                <FaYoutube className="text-black text-3xl fill-black" />
                            </a>
                            <a href="#" className="bg-white p-2 rounded text-base">
                                <FaTwitter className="text-black text-3xl fill-black" />
                            </a>
                            <a href="#" className="bg-white p-2 rounded text-base">
                                <FaLinkedin className="text-black text-3xl fill-black" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex px-12">
                    {/* Empresa */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Empresa</h4>
                        <ul className="grid grid-cols-3 gap-2 gap-x-32">
                            <li className="mb-2 hover:underline cursor-pointer text-base">
                                Porsche de un vistazo
                            </li>
                            <li className="mb-2 hover:underline cursor-pointer text-base">Porsche Ibérica</li>
                            <li className="mb-2 hover:underline cursor-pointer text-base">
                                Sostenibilidad
                            </li>
                            <li className="mb-2 hover:underline cursor-pointer text-base">
                                Empleo
                            </li>
                            <li className="mb-2 hover:underline cursor-pointer text-base">
                                Porsche Partner Forum
                            </li>
                            <li className="mb-2 hover:underline cursor-pointer text-base">Filiales</li>
                            <li className="mb-2 hover:underline cursor-pointer text-base">
                                Newsroom y Notas de Prensa
                            </li>
                            <li className="mb-2 hover:underline cursor-pointer text-base">Contacto</li>
                        </ul>
                    </div>
                </div>

                <div className="relative text-end text-gray-400 top-5">
                    &copy; {new Date().getFullYear()} Porsche 911. Todos los derechos
                    reservados.
                </div>

                {/* Línea inferior */}
                <hr className="border-gray-700" />
            </div>

            <div className="flex items-center justify-between mt-8">
                <Image src="/porsche-1-logo-png-transparent-white.png" width={100} height={50} alt="Logo de Porsche" className="absolute right-16 top-16" />
            </div>
        </footer>
    );
}
