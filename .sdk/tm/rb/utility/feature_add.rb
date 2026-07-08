# Gitlab SDK utility: feature_add
module GitlabUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
