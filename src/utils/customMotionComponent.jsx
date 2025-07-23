import { motion } from "motion/react";

export default function CustomMotionComponent({ as, children, ...props }) {
    const ChildrenComponent = motion(as, {
        forwardMotionProps: true,
    });

    return <ChildrenComponent {...props}>{children}</ChildrenComponent>;
};