import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import BlogCard from "../../components/common/BlogCard";
import BlogRecentCard from "../../components/common/BlogRecentCard";

import { blogsData } from "./dataBlog";
import ImagePassport from "../../components/sections/ImagePassport";
import Pagination from "../../components/common/Pagination";

export default function BlogPage() {
  const recent = blogsData.slice(0, 2);
  const all = blogsData;

  const navigate = useLocation();

  useEffect(() => {
    if (navigate.pathname === "/blog") {
      document.querySelector("body header > div").classList.add("bg-[#F8F9FD]");
      document
        .querySelector("body header > div")
        .classList.remove("bg-brand-light");
    }

    return () => {
      document
        .querySelector("body header > div")
        .classList.remove("bg-[#F8F9FD]");
      document
        .querySelector("body header > div")
        .classList.add("bg-brand-light");
    };
  }, [navigate.pathname]);

  return (
    <>
      <section id="blog" className="bg-[#F8F9FD] pb-[39px]">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-[56px]">Blog</h1>

          <h2 className="mb-[32px]">Recent blog posts</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
            <div>
              <div>
                <BlogCard
                  image={recent[0].featured_image}
                  title={recent[0].title}
                  text={recent[0].excerpt}
                  date={recent[0].date}
                  link={recent[0].slug}
                />
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-[20px]">
                {recent.slice(1).map((blog) => (
                  <BlogRecentCard
                    key={blog.id}
                    image={blog.featured_image}
                    title={blog.title}
                    text={blog.excerpt}
                    date={blog.date}
                    link={blog.slug}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[64px]">
            <h2 className="mb-[32px]">All blog posts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {all.map((blog) => (
                <div key={blog.id}>
                  <BlogCard
                    image={blog.featured_image}
                    title={blog.title}
                    text={blog.excerpt}
                    date={blog.date}
                    link={blog.slug}
                  />
                </div>
              ))}
            </div>
          </div>

          <Pagination />
        </div>
      </section>

      <ImagePassport />
    </>
  );
}
