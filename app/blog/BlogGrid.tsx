"use client";

import { blogPosts } from "@/data/blog-posts";
import { Container } from "@/components/shared/Container";
import { BlogCard } from "@/components/shared/BlogCard";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function BlogGrid() {
  return (
    <section className="py-20">
      <Container>
        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} index={i} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
