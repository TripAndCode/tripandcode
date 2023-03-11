
import { motion } from "framer-motion"
import { ReactNode } from "react";

const BoxTransition = ({ children }: { children: ReactNode }) => {

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [40, 0] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>

    )
}


export default BoxTransition;
