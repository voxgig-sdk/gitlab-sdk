<?php
declare(strict_types=1);

// Gitlab SDK ApiEntitiesDraftNote entity

require_once __DIR__ . '/../utility/struct/Struct.php';
require_once __DIR__ . '/../core/Helpers.php';

use Voxgig\Struct\Struct;

class ApiEntitiesDraftNoteEntity
{
    private string $_name;
    private $_client;
    private $_utility;
    private array $_entopts;
    private array $_data;
    private array $_match;
    private $_entctx;

    public function __construct($client, ?array $entopts = null)
    {
        $entopts = $entopts ?? [];
        if (!isset($entopts["active"])) {
            $entopts["active"] = true;
        } elseif ($entopts["active"] === false) {
            // keep false
        } else {
            $entopts["active"] = true;
        }

        $this->_name = "api_entities_draft_note";
        $this->_client = $client;
        $this->_utility = $client->get_utility();
        $this->_entopts = $entopts;
        $this->_data = [];
        $this->_match = [];

        $this->_entctx = ($this->_utility->make_context)([
            "entity" => $this,
            "entopts" => $entopts,
        ], $client->get_root_ctx());

        ($this->_utility->feature_hook)($this->_entctx, "PostConstructEntity");
    }

    public function get_name(): string
    {
        return $this->_name;
    }

    public function make(): self
    {
        $opts = $this->_entopts;
        return new ApiEntitiesDraftNoteEntity($this->_client, $opts);
    }

    /**
     * @param ApiEntitiesDraftNote|array $args ApiEntitiesDraftNote data (assoc-array) to store.
     */
    public function data_set($args): void
    {
        if ($args) {
            $this->_data = GitlabHelpers::to_map(Struct::clone($args)) ?? [];
            ($this->_utility->feature_hook)($this->_entctx, "SetData");
        }
    }

    /**
     * @return ApiEntitiesDraftNote|array The current ApiEntitiesDraftNote data as an assoc-array.
     */
    public function data_get()
    {
        ($this->_utility->feature_hook)($this->_entctx, "GetData");
        return Struct::clone($this->_data);
    }

    /**
     * @param array $args Match filter (any subset of ApiEntitiesDraftNote fields).
     */
    public function match_set($args): void
    {
        if ($args) {
            $this->_match = GitlabHelpers::to_map(Struct::clone($args)) ?? [];
            ($this->_utility->feature_hook)($this->_entctx, "SetMatch");
        }
    }

    /**
     * @return array The current match filter (any subset of ApiEntitiesDraftNote fields).
     */
    public function match_get()
    {
        ($this->_utility->feature_hook)($this->_entctx, "GetMatch");
        return Struct::clone($this->_match);
    }

    
    /**
     * Load a single ApiEntitiesDraftNote.
     *
     * @param ApiEntitiesDraftNoteLoadMatch|array|null $reqmatch Match criteria (id/query
     *   fields) as an assoc-array; a typed ApiEntitiesDraftNoteLoadMatch names the shape.
     * @param mixed $ctrl Optional per-call control overrides.
     * @return ApiEntitiesDraftNote|array The loaded ApiEntitiesDraftNote as an assoc-array at the
     *   SDK boundary; throws GitlabError on failure (item-5 convention).
     */
    public function load(?array $reqmatch = null, $ctrl = null): mixed
    {
        $utility = $this->_utility;
        $ctx = ($utility->make_context)([
            "opname" => "load",
            "ctrl" => $ctrl,
            "match" => $this->_match,
            "data" => $this->_data,
            "reqmatch" => $reqmatch,
        ], $this->_entctx);

        return $this->_run_op($ctx, function () use ($ctx) {
            if ($ctx->result) {
                if ($ctx->result->resmatch) {
                    $this->_match = $ctx->result->resmatch;
                }
                if ($ctx->result->resdata) {
                    $this->_data = GitlabHelpers::to_map(Struct::clone($ctx->result->resdata)) ?? [];
                }
            }
        });
    }



    
    /**
     * List ApiEntitiesDraftNote items matching the given filter.
     *
     * @param ApiEntitiesDraftNoteListMatch|array|null $reqmatch Match filter (any subset
     *   of ApiEntitiesDraftNote fields) as an assoc-array; ApiEntitiesDraftNoteListMatch names the shape.
     * @param mixed $ctrl Optional per-call control overrides.
     * @return ApiEntitiesDraftNote[]|array A list of ApiEntitiesDraftNote items as assoc-arrays at
     *   the SDK boundary; throws GitlabError on failure (item-5 convention).
     */
    public function list(?array $reqmatch = null, $ctrl = null): mixed
    {
        $utility = $this->_utility;
        $ctx = ($utility->make_context)([
            "opname" => "list",
            "ctrl" => $ctrl,
            "match" => $this->_match,
            "data" => $this->_data,
            "reqmatch" => $reqmatch,
        ], $this->_entctx);

        return $this->_run_op($ctx, function () use ($ctx) {
            if ($ctx->result) {
                if ($ctx->result->resmatch) {
                    $this->_match = $ctx->result->resmatch;
                }
            }
        });
    }



    
    /**
     * Create a new ApiEntitiesDraftNote.
     *
     * @param ApiEntitiesDraftNoteCreateData|array|null $reqdata Body data as an assoc-array;
     *   a typed ApiEntitiesDraftNoteCreateData names the shape.
     * @param mixed $ctrl Optional per-call control overrides.
     * @return ApiEntitiesDraftNote|array The created ApiEntitiesDraftNote as an assoc-array at the
     *   SDK boundary; throws GitlabError on failure (item-5 convention).
     */
    public function create(?array $reqdata = null, $ctrl = null): mixed
    {
        $utility = $this->_utility;
        $ctx = ($utility->make_context)([
            "opname" => "create",
            "ctrl" => $ctrl,
            "match" => $this->_match,
            "data" => $this->_data,
            "reqdata" => $reqdata,
        ], $this->_entctx);

        return $this->_run_op($ctx, function () use ($ctx) {
            if ($ctx->result) {
                if ($ctx->result->resdata) {
                    $this->_data = GitlabHelpers::to_map(Struct::clone($ctx->result->resdata)) ?? [];
                }
            }
        });
    }



    
    /**
     * Update an existing ApiEntitiesDraftNote.
     *
     * @param ApiEntitiesDraftNoteUpdateData|array|null $reqdata Body data as an assoc-array;
     *   a typed ApiEntitiesDraftNoteUpdateData names the shape.
     * @param mixed $ctrl Optional per-call control overrides.
     * @return ApiEntitiesDraftNote|array The updated ApiEntitiesDraftNote as an assoc-array at the
     *   SDK boundary; throws GitlabError on failure (item-5 convention).
     */
    public function update(?array $reqdata = null, $ctrl = null): mixed
    {
        $utility = $this->_utility;
        $ctx = ($utility->make_context)([
            "opname" => "update",
            "ctrl" => $ctrl,
            "match" => $this->_match,
            "data" => $this->_data,
            "reqdata" => $reqdata,
        ], $this->_entctx);

        return $this->_run_op($ctx, function () use ($ctx) {
            if ($ctx->result) {
                if ($ctx->result->resmatch) {
                    $this->_match = $ctx->result->resmatch;
                }
                if ($ctx->result->resdata) {
                    $this->_data = GitlabHelpers::to_map(Struct::clone($ctx->result->resdata)) ?? [];
                }
            }
        });
    }



    

    private function _run_op($ctx, callable $post_done): mixed
    {
        $utility = $this->_utility;

        ($utility->feature_hook)($ctx, "PrePoint");
        [$point, $err] = ($utility->make_point)($ctx);
        $ctx->out["point"] = $point;
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        ($utility->feature_hook)($ctx, "PreSpec");
        [$spec, $err] = ($utility->make_spec)($ctx);
        $ctx->out["spec"] = $spec;
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        ($utility->feature_hook)($ctx, "PreRequest");
        [$resp, $err] = ($utility->make_request)($ctx);
        $ctx->out["request"] = $resp;
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        ($utility->feature_hook)($ctx, "PreResponse");
        [$resp2, $err] = ($utility->make_response)($ctx);
        $ctx->out["response"] = $resp2;
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        ($utility->feature_hook)($ctx, "PreResult");
        [$result, $err] = ($utility->make_result)($ctx);
        $ctx->out["result"] = $result;
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        ($utility->feature_hook)($ctx, "PreDone");
        $post_done();

        return ($utility->done)($ctx);
    }
}
