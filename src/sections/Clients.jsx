
import { motion } from "framer-motion";

const Clients = ({texts, clientReviews}) => {
    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            className="c-space sm:py-10 py-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <motion.h3
                className="section-headtext"
                variants={fadeInVariant}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {texts.my_clients}
            </motion.h3>
            <motion.div
                className="client-container sm:mt-12 mt-6"
                variants={fadeInVariant}
            >
                {clientReviews.map(({ id, name, position, img, review }) => (
                    <motion.div
                        key={id}
                        className="about-bg-light z-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInVariant}
                        transition={{ delay: 0.3 + id * 0.1, duration: 1.2, ease: "easeOut" }}
                    >
                        <div>
                            <p className="client-text relative">
                                {review}
                            </p>
                            <div className="client-content relative">
                                <div className="flex gap-3 relative">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="w-14 h-14 rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <p className="client-name">
                                            {name}
                                        </p>
                                        <p className="client-position">
                                            {position}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img
                                            key={index}
                                            src="/assets/star.png"
                                            alt="star"
                                            className="w-4 h-4"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Clients;
