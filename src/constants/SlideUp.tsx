
const  SlideUp = (direction:string, type:string, delay:number, duration:number) => {
  return {
    hidden: {
      x: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
      y: direction === "left" ? "100%" : direction === "left" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  }
}

export default SlideUp