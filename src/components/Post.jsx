import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const SectionTitle = () => {
    return (
        <div className="mt-40"> {/* Adjust the value of mt for the desired margin */}
            <div className="section-title ">
                <h2 data-in-view="" className="section-title__title t-h2 glue-headline css-in-view out-view-bottom">
                    <span className="text-white text-8xl">Introducing</span><br />
                    <span className="t-gradient text-blue-500 text-7xl">Gemini 1.5</span>
                </h2>
                <div>
                    <h2 data-in-view="" className="section-title__subtitle t-h3 out-view-bottom mt-6 text-4xl lg:text-4xl">Our next-generation model</h2> {/* Adjust mt for top margin and text size with text-lg and lg:text-xl */}
                    <p data-in-view="" className="section-title__text t-paragraph glue-card__description css-in-view out-view-bottom text-blue-200 font-semibold mt-3 text-xl lg:text-xl">Gemini 1.5 delivers dramatically enhanced  <br />performance with a more efficient architecture. <br />The first model we’ve released for early testing,<br /> Gemini 1.5 Pro, introduces a breakthrough <br /> experimental feature in long-context <br />understanding.</p>
                </div>
                <div className="section-button flex justify-center mt-8">
                    <a href="https://goo.gle/GeminiV1-5" target="_blank" data-in-view className="custom-button bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full inline-flex items-center border border-white mr-4">
                        <span className="button__label">Read the technical paper</span>
                        <FiArrowRight className="ml-2 w-4 h-4" />
                    </a>
                    <a href="https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024?utm_source=gdm&amp;utm_medium=referral&amp;utm_campaign=gemini24" target="_blank" data-in-view className="custom-button bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-full inline-flex items-center border border-white">
                        <span className="button__label">Read the blog post</span>
                        <FiArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>

            </div>
        </div >
    );
};

export default SectionTitle;
