---
sidebar_position: 3
---

# About IaCDOG

`IaCDOG` is a tool that supports visualization of `IaC`, allowing anyone using `Terraform`. `IaCDOG` quickly and easily create visualizations. Currently, `IaCDOG` only supports Terraform visualizations, but we will continue to expand it to support many other `IaC` visualizations.

<p align="center">
  <a
    href="https://www.initcloud.io/iacdog/visualizer"
    target="_blank"
    rel="noreferrer noopener"
    alt="iacdog-logo"
  >
    <img src="/img/logo.png" alt="id" style={{ width: 200 }} />
  </a>
</p>

<br />

:::note

`IaCDOG` sends files to the server for `terraform` parsing and never saves them. Rest assured!

:::

<br />

**Compared to other IaC visualization services, IaCDOG is:**

1. Provides diagrams based on **cloud resources**, making it easy to understand the infrastructure structure.
2. Scan `tf` files without visualizing `tfplan` files to enable quick visualization without separate API communication.
3. Provides **code-based visualization** rather than drag-and-drop visualization, which is convenient to apply in practice.
